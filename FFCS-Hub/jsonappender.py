import json
import sys

OUT_FILE = "data/scope.json"

def parse_block(raw):
    entries = []
    for line in raw.strip().split("\n"):
        parts = line.strip().split("\t")
        if len(parts) < 3:
            continue
        slots = parts[0].split("+")
        room = parts[1].strip()
        name = parts[2].strip()
        entries.append({
            "name": name,
            "slots": slots,
            "theory_room": room,
            "lab_room": None
        })
    return entries

def get_session(slot):
    if slot.startswith("L"):
        return "morning" if int(slot[1:]) <= 30 else "evening"
    return "morning" if slot.endswith("1") else "evening"

def merge_theory_lab(theory_list, lab_list):
    merged = []
    used_lab = set()

    for t in theory_list:
        t_session = get_session(t["slots"][0])
        match = None
        for i, l in enumerate(lab_list):
            if i in used_lab:
                continue
            l_session = get_session(l["slots"][0])
            if l["name"] == t["name"] and t_session != l_session:
                match = (i, l)
                break

        if not match:
            print(f"WARNING: No valid lab match for {t['name']}")
            continue

        used_lab.add(match[0])
        l = match[1]
        merged.append({
            "name": t["name"],
            "slots": t["slots"] + l["slots"],
            "theory_room": t["theory_room"],
            "lab_room": l["theory_room"]  # lab block's "theory_room" field holds the lab room
        })

    return merged

def paste_block(prompt):
    print(f"{prompt} (empty line to finish):")
    lines = []
    while True:
        line = input()
        if not line:
            break
        lines.append(line)
    return parse_block("\n".join(lines))

if __name__ == "__main__":
    subject_name = input("Subject name (e.g. BCSE202E - Data Structures): ").strip()

    sub_type_map = { "1": "theory", "2": "theory-lab", "3": "lab" }
    print("Type: 1=theory  2=theory-lab  3=lab")
    sub_type = sub_type_map.get(input("Enter number: ").strip())
    if not sub_type:
        print("Invalid choice.")
        sys.exit()

    theory_list = paste_block("Paste theory list")

    if sub_type == "theory-lab":
        lab_list = paste_block("Paste lab list")
        faculty = merge_theory_lab(theory_list, lab_list)
    else:
        faculty = theory_list

    result = {
        subject_name: {
            "sub_type": sub_type,
            "faculty": faculty
        }
    }

    print("\n--- OUTPUT JSON ---\n")
    print(json.dumps(result, indent=2))

    try:
        with open(OUT_FILE, "r") as f:
            content = f.read().strip()
            existing = json.loads(content) if content else {}
    except FileNotFoundError:
        existing = {}

    existing.update(result)

    with open(OUT_FILE, "w") as f:
        json.dump(existing, f, indent=2)

    print(f"Written to {OUT_FILE}")