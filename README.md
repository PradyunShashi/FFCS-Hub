# FFCS-Hub
KEEEEEEEEEEEEEEEEP the IDs especially (
#school-select
#subject-select
#faculty-printer
#add-subject
#generate
#selected-subjects
#results
#tt
)
they are super important otherwise the js breaks.
Although feel free to edit their properties in the CSS file just dont change the id name itself.
In the HTML timetable also keep the data-slot attribute safe, otherwise slotting gets fucked.

When dealing with =>
#selected-subjects {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
}

.selected-subject-card {
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
feel free to do whatever you want their code was a bit AI-slopped but dont change anything in PNC solver or Generate Button (other than design for the button) it gives results properly, make the result presentation better I suppose.
If possible implement a search bar for subjects, with 50+ subjects it'll be impossible to simply find by scrolling. 

Add some JS for user convenience if you want like selecting A1 shows menu to select only A1 or A1+TA1 also.

How to use is simple:
1. Select slots.
2. Select school (only scope is working to add more schools just create for example sense.json and put in data folder, when facs release we have to manually add it fucccccccccccccccccccccccccck).
3. Select Subject.
4. Add faculty by selecting their name or select all.
5. Generate combos.
Note: selected slots can be changed any time the user wants btw. Might need to be handled where the subject is chosen already but the user changes it midway through.
Theory only subjects are reduced purely to their slots like "Any E1+TE1 faculty".





To generate JSON files for testing feed this to gemini or whatever slop llm:
The Complete VIT FFCS Blueprint Prompt
Act as a senior database engineer and generate a mock testing dataset structured exactly in JSON for a university scheduling engine based on the VIT (Vellore Institute of Technology) FFCS (Fully Flexible Credit System) architecture.

1. Context & Structural Rules of the VIT Grid
Theory Slots Suffix 1 (Morning Shift): Slots ending in 1 (A1, B1, C1, D1, E1, F1, G1) and their corresponding tutorials (TA1, TB1, etc.) run strictly in the morning.

Theory Slots Suffix 2 (Evening Shift): Slots ending in 2 (A2, B2, C2, D2, E2, F2, G2) and their corresponding tutorials (TA2, TB2, etc.) run strictly in the afternoon/evening.

Lab Blocks (Morning Shift): Odd-numbered twin lab blocks (L1+L2, L3+L4, up to L29+L30) run strictly in the morning.

Lab Blocks (Evening Shift): Even-numbered twin lab blocks (L31+L32, L33+L34, up to L59+L60) run strictly in the evening.

2. Strict Timetable Constraints to Enforce
The Shift-Split Rule (Anti-Clashing): To prevent a student or professor from being double-booked into the same physical shift, a morning theory slot (Suffix 1) must only ever pair with evening lab blocks (Even numbers like L31–L60). Conversely, an evening theory slot (Suffix 2) must only ever pair with morning lab blocks (Odd numbers like L1–L30).

Slot Basket Isolation: In real VIT resource allocation, a single subject does not use all slots from A to G. Restrict each individual subject to a "basket" of exactly 4 theory slots total (e.g., 2 morning options like A1, B1, and 2 evening options like A2, B2) across its entire faculty pool.

3. JSON Output Schema
Generate the data strictly matching this Format 2 structure:

JSON
{
  "SUBJECT_CODE - Subject Title": {
    "sub_type": "theory-lab", 
    "faculty": [
      {
        "name": "FACULTY NAME",
        "slots": ["A1", "TA1", "L31", "L32"],
        "theory_room": "ROOM-XXX",
        "lab_room": "SJT-XXX"
      }
    ]
  }
}
(Note: For subjects with "sub_type": "theory", the slots array must omit lab strings, and lab_room must be explicitly set to null).

4. Required Data Payload & Injected Errors
Generate a total of [Insert Number, e.g., 10] subjects.

Provide exactly [Insert Number, e.g., 25] faculty entries per subject.

Injected Clashes for Validation Testing: Intentionally introduce a few logical errors into the file so my code can test its validation scripts:

Lab Room Collisions: Assign different professors from completely different subjects to the exact same lab_room during the exact same lab slots.

Faculty Resource Overlap: Cross-list a few high-demand professor names across entirely different subjects in overlapping slot blocks.

Hand that to your friend. It sets up the whole VIT ecosystem explicitly so the output won't break down.

Thank you for reading whore.
