const constraint = [];
const subFac = [];

const schoolFiles = {
    "SCOPE":"data/scope.json",
    "SCORE":"data/score.json",
    "SENSE":"data/sense.json"
}

const sub_slots = {
    // Morning
    "A1":  [["MON", 800, 850], ["WED", 900, 950]],
    "B1":  [["TUE", 800, 850], ["THU", 900, 950]],
    "C1":  [["WED", 800, 850], ["FRI", 900, 950]],
    "D1":  [["MON", 1000, 1050], ["THU", 800, 850]],
    "E1":  [["TUE", 1000, 1050], ["FRI", 800, 850]],
    "F1":  [["MON", 900, 950], ["WED", 1000, 1050]],
    "G1":  [["TUE", 900, 950], ["THU", 1000, 1050]],
    "TA1": [["FRI", 1000, 1050]],
    "TB1": [["MON", 1100, 1150]],
    "TC1": [["TUE", 1100, 1150]],
    "TD1": [["FRI", 1200, 1250]],
    "TE1": [["THU", 1100, 1150]],
    "TF1": [["FRI", 1100, 1150]],
    "TG1": [["MON", 1200, 1250]],
    "TAA1":[["TUE", 1200, 1250]],
    "TCC1":[["THU", 1200, 1250]],

    // Evening
    "A2":  [["MON", 1400, 1450], ["WED", 1500, 1550]],
    "B2":  [["TUE", 1400, 1450], ["THU", 1500, 1550]],
    "C2":  [["WED", 1400, 1450], ["FRI", 1500, 1550]],
    "D2":  [["MON", 1600, 1650], ["THU", 1400, 1450]],
    "E2":  [["TUE", 1600, 1650], ["FRI", 1400, 1450]],
    "F2":  [["MON", 1500, 1550], ["WED", 1600, 1650]],
    "G2":  [["TUE", 1500, 1550], ["THU", 1600, 1650]],
    "TA2": [["FRI", 1600, 1650]],
    "TB2": [["MON", 1700, 1750]],
    "TC2": [["TUE", 1700, 1750]],
    "TD2": [["WED", 1700, 1750]],
    "TE2": [["THU", 1700, 1750]],
    "TF2": [["FRI", 1700, 1750]],
    "TG2": [["MON", 1800, 1850]],
    "TAA2": [["TUE", 1800, 1850]],
    "TBB2": [["WED", 1800, 1850]],
    "TCC2": [["THU", 1800, 1850]],
    "TDD2": [["FRI", 1800, 1850]],

    // Monday
    "L1": [["MON", 800, 850]], "L2": [["MON", 851, 940]], "L3": [["MON", 951, 1040]],
    "L4": [["MON", 1041, 1130]], "L5": [["MON", 1140, 1230]], "L6": [["MON", 1231, 1320]],
    "L31": [["MON", 1400, 1450]], "L32": [["MON", 1451, 1540]], "L33": [["MON", 1551, 1640]],
    "L34": [["MON", 1641, 1730]], "L35": [["MON", 1740, 1830]], "L36": [["MON", 1831, 1920]],

    // Tuesday
    "L7": [["TUE", 800, 850]], "L8": [["TUE", 851, 940]], "L9": [["TUE", 951, 1040]],
    "L10": [["TUE", 1041, 1130]], "L11": [["TUE", 1140, 1230]], "L12": [["TUE", 1231, 1320]],
    "L37": [["TUE", 1400, 1450]], "L38": [["TUE", 1451, 1540]], "L39": [["TUE", 1551, 1640]],
    "L40": [["TUE", 1641, 1730]], "L41": [["TUE", 1740, 1830]], "L42": [["TUE", 1831, 1920]],

    // Wednesday
    "L13": [["WED", 800, 850]], "L14": [["WED", 851, 940]], "L15": [["WED", 951, 1040]],
    "L16": [["WED", 1041, 1130]], "L17": [["WED", 1140, 1230]], "L18": [["WED", 1231, 1320]],
    "L43": [["WED", 1400, 1450]], "L44": [["WED", 1451, 1540]], "L45": [["WED", 1551, 1640]],
    "L46": [["WED", 1641, 1730]], "L47": [["WED", 1740, 1830]], "L48": [["WED", 1831, 1920]],

    // Thursday
    "L19": [["THU", 800, 850]], "L20": [["THU", 851, 940]], "L21": [["THU", 951, 1040]],
    "L22": [["THU", 1041, 1130]], "L23": [["THU", 1140, 1230]], "L24": [["THU", 1231, 1320]],
    "L49": [["THU", 1400, 1450]], "L50": [["THU", 1451, 1540]], "L51": [["THU", 1551, 1640]],
    "L52": [["THU", 1641, 1730]], "L53": [["THU", 1740, 1830]], "L54": [["THU", 1831, 1920]],

    // Friday
    "L25": [["FRI", 800, 850]], "L26": [["FRI", 851, 940]], "L27": [["FRI", 951, 1040]],
    "L28": [["FRI", 1041, 1130]], "L29": [["FRI", 1140, 1230]], "L30": [["FRI", 1231, 1320]],
    "L55": [["FRI", 1400, 1450]], "L56": [["FRI", 1451, 1540]], "L57": [["FRI", 1551, 1640]],
    "L58": [["FRI", 1641, 1730]], "L59": [["FRI", 1740, 1830]], "L60": [["FRI", 1831, 1920]],
};

function isClash(slot1, slot2) {
    const times1 = sub_slots[slot1] || [];
    const times2 = sub_slots[slot2] || [];

    for (const t1 of times1) {
        for (const t2 of times2) {
            if (t1[0] === t2[0]) {
                if (t1[1] < t2[2] && t1[2] > t2[1]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function getCellsForCode(code) {
    return Array.from(document.querySelectorAll("[data-slot]")).filter(c =>
        c.dataset.slot.split(",").includes(code)
    );
}

document.getElementById("tt").addEventListener("click", (e) => {
    const cell = e.target.closest("td");
    if (!cell) return;
    if (cell.classList.contains("disabled")) return;

    const rawText = cell.textContent.trim();
    const skip = ["MON", "TUE", "WED", "THU", "FRI", "LUNCH", ""];
    if (skip.includes(rawText)) return;

    const codes = rawText.split("+").map(code => code.trim());

    for (const sl of codes) {
        if (constraint.includes(sl)) {
            getCellsForCode(sl).forEach(c => {
                c.style.backgroundColor = "white";
            });
            for (const sub of Object.keys(sub_slots)) {
                if (sub == sl) continue;
                if (isClash(sub, sl)) {
                    getCellsForCode(sub).forEach(c => {
                        c.classList.remove("disabled");
                        c.style.backgroundColor = "white";
                    });
                }
            }
            constraint.splice(constraint.indexOf(sl), 1);
        } else {
            getCellsForCode(sl).forEach(c => {
                c.style.backgroundColor = "green";
            });
            constraint.push(sl);
        }

    }
    for (const sub of Object.keys(sub_slots)) {
        for(const cons of constraint){
                if (sub == cons) continue;
                if (isClash(sub, cons)) {
                    getCellsForCode(sub).forEach(c => {
                        c.classList.add("disabled");
                        c.style.backgroundColor = "gray";
                    });
                }
            }}
    console.log(constraint);
});

//Selection of school
let loadedData = {};
let school = null;
document.getElementById("school-select").addEventListener("change", async (e) => {
    school = e.target.value;
    if (!school) return;

    const res = await fetch(schoolFiles[school]);
    const data = await res.json();
    console.log(
    "Loaded file:",
    schoolFiles[school]
);

console.log(
    data["BCSE202E - Data Structures and Algorithms"]
        .faculty[0]
);
    loadedData[school] = data;

    populateSubjectDropdown(data);
});

//Prints subjects in the dropdown box
function populateSubjectDropdown(data) {
    const subjectSelect = document.getElementById("subject-select");
    subjectSelect.innerHTML = '<option value="">-- Select Subject --</option>';

    for (const code of Object.keys(data)) {
        const opt = document.createElement("option");
        opt.value = code;
        opt.textContent = `${code}`;
        subjectSelect.appendChild(opt);
    }
}

//printing the faculty list
document.getElementById("subject-select").addEventListener("change", async (e) => {
    const code = e.target.value;
    if (!code) return;

    const facprint = document.getElementById("faculty-printer");
    const facArray = loadedData[school][code].faculty;

    let html = `<button id = select-all>Select All</button><br>`;

    facArray.forEach((fac,idx)=>{
        console.log(fac)
        html += `<label><input type = checkbox value = "${idx}"> ${fac.name}</label><br>`;
    });
    facprint.innerHTML = html;

    document.getElementById("select-all").addEventListener("click", () =>{
        document.querySelectorAll("#faculty-printer input[type= 'checkbox']").forEach(cb=>cb.checked=true);
    });
});

//ADDS subject button
document.getElementById("add-subject").addEventListener("click",() =>{
    const code = document.getElementById("subject-select").value;
    if(!code) return;
    const facArray = loadedData[school][code].faculty;

console.log("Constraints:", constraint.map(x => `"${x}"`));

for (const fac of facArray) {
    console.log(
        fac.name,
        fac.slots,
        fac.slots.every(slot => constraint.includes(slot))
    );

    for (const slot of fac.slots) {
        console.log(
            `Checking "${slot}" ->`,
            constraint.includes(slot)
        );
    }
}
    let chosenFac = Array.from(
        document.querySelectorAll("#faculty-printer input[type='checkbox']:checked")).map(cb => facArray[cb.value]).filter(fac => fac.slots.every(slot => constraint.includes(slot)));
        console.log("Current constraints:", constraint);

for (const fac of facArray) {
    console.log(
        fac.name,
        fac.slots,
        fac.slots.every(slot => constraint.includes(slot))
    );
}
        if (chosenFac.length === 0) {
        alert("No valid faculty for this subject given your current constraints.");
        return;
    }
    if (loadedData[school][code].sub_type === "theory") {
    const seen = {};
    for (const fac of chosenFac) {
        const key = fac.slots.join("+");
        if (!seen[key]) {
            seen[key] = { name: `Any ${key} faculty`, slots: fac.slots };
        }
    }
    chosenFac = Object.values(seen);
    }
    console.log(chosenFac);

    if (subFac.some(s => s.subject === code)) {
    alert("Subject already added.");
    return;
    }
    subFac.push({ subject: code, faculty: chosenFac });
    renderSelectedSubjects();
});

//Generating the combos

document.getElementById("generate").addEventListener("click", () => {
    if (subFac.length === 0) {
        alert("No subjects added.");
        return;
    }

    const results = solvePnc(0, [], []);

    if (results.length === 0) {
        alert("No valid timetable possible.");
        return;
    }

    console.log(results);
    renderResults(results);
});


//renderer
function renderResults(results) {
    const container = document.getElementById("results");
    container.innerHTML = "";

    results.forEach((schedule, idx) => {
        let html = `
            <div class="result-card">
                <h3>Timetable ${idx + 1}</h3>
        `;

        schedule.forEach(entry => {
            html += `
                <div class="subject-card">
                    <h4>${entry.subject}</h4>
                    <p><strong>Faculty:</strong> ${entry.fac.name}</p>
                    <p><strong>Slots:</strong> ${entry.fac.slots.join(", ")}</p>
                </div>
            `;
        });

        html += `</div>`;
        container.innerHTML += html;
    });
}


//SOLVER 


function solvePnc(subIdx, currentSchedule, currentOccupied) {
    if (subIdx === subFac.length) {
        return [currentSchedule];
    }

    const allValid = [];

    for (const fac of subFac[subIdx].faculty) {
        let hasClash = false;

        for (const newSlot of fac.slots) {
            for (const existingSlot of currentOccupied) {
                if (isClash(newSlot, existingSlot)) {
                    hasClash = true;
                    break;
                }
            }
            if (hasClash) break;
        }

        if (!hasClash) {
            const res = solvePnc(
                subIdx + 1,
                [...currentSchedule, { subject: subFac[subIdx].subject, fac: fac }],
                [...currentOccupied, ...fac.slots]
            );
            allValid.push(...res);

            if (allValid.length >= 50) return allValid;
        }
    }

    return allValid;
}

//subject renderer
function renderSelectedSubjects() {
    const container = document.getElementById("selected-subjects");
    container.innerHTML = "";

    subFac.forEach((sub, idx) => {
        container.innerHTML += `
            <div class="selected-subject-card">
                <h4>${sub.subject}</h4>
                <p>${sub.faculty.length} faculty options</p>
                <button onclick="deleteSubject(${idx})">
                    Delete
                </button>
            </div>
        `;
    });
}

//subject deleter
function deleteSubject(idx) {
    subFac.splice(idx, 1);
    renderSelectedSubjects();
}


