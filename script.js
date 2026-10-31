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
    "V1": [["WED", 1100, 1150]],
    "V2": [["WED", 1200, 1250]],

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

const MORNING_THEORY_SLOTS = [
    "A1", "B1", "C1", "D1", "E1", "F1", "G1",
    "TA1", "TB1", "TC1", "TD1", "TE1", "TF1", "TG1", "TAA1", "TCC1"
];

const EVENING_THEORY_SLOTS = [
    "A2", "B2", "C2", "D2", "E2", "F2", "G2",
    "TA2", "TB2", "TC2", "TD2", "TE2", "TF2", "TG2", "TAA2", "TBB2", "TCC2", "TDD2"
];

const ALL_THEORY_SLOTS = [...MORNING_THEORY_SLOTS, ...EVENING_THEORY_SLOTS];

function updateTableVisuals() {
    const allCells = document.querySelectorAll("[data-slot]");
    allCells.forEach(cell => {
        cell.classList.remove("selected", "disabled");
        cell.style.backgroundColor = "";
        cell.style.color = "";
    });

    for (const slot of constraint) {
        getCellsForCode(slot).forEach(cell => {
            cell.classList.add("selected");
        });
    }

    for (const sub of Object.keys(sub_slots)) {
        for (const cons of constraint) {
            if (sub === cons) continue;
            if (isClash(sub, cons)) {
                getCellsForCode(sub).forEach(cell => {
                    cell.classList.add("disabled");
                    cell.classList.remove("selected");
                });
            }
        }
    }

    renderSelectedSubjects();
}

document.getElementById("tt").addEventListener("click", (e) => {
    const cell = e.target.closest("td");
    if (!cell) return;
    if (cell.classList.contains("disabled")) return;

    const rawText = cell.textContent.trim();
    const skip = ["MON", "TUE", "WED", "THU", "FRI", "LUNCH", ""];
    if (skip.includes(rawText)) return;

    const codes = rawText.split("+").map(code => code.trim());
    const allSelected = codes.every(c => constraint.includes(c));

    for (const sl of codes) {
        if (allSelected) {
            const idx = constraint.indexOf(sl);
            if (idx !== -1) constraint.splice(idx, 1);
        } else {
            if (!constraint.includes(sl)) {
                constraint.push(sl);
            }
        }
    }

    updateTableVisuals();
});

// Presets
function selectAllTheory() {
    for (const slot of ALL_THEORY_SLOTS) {
        if (!constraint.includes(slot)) {
            constraint.push(slot);
        }
    }
    updateTableVisuals();
}

function selectMorningTheory() {
    for (const slot of MORNING_THEORY_SLOTS) {
        if (!constraint.includes(slot)) {
            constraint.push(slot);
        }
    }
    updateTableVisuals();
}

function selectEveningTheory() {
    for (const slot of EVENING_THEORY_SLOTS) {
        if (!constraint.includes(slot)) {
            constraint.push(slot);
        }
    }
    updateTableVisuals();
}

function clearTable() {
    constraint.length = 0;
    updateTableVisuals();
}

window.selectAllTheory = selectAllTheory;
window.selectMorningTheory = selectMorningTheory;
window.selectEveningTheory = selectEveningTheory;
window.clearTable = clearTable;

const btnAll = document.getElementById("btn-all-theory");
if (btnAll) btnAll.addEventListener("click", selectAllTheory);

const btnMorn = document.getElementById("btn-morning-theory");
if (btnMorn) btnMorn.addEventListener("click", selectMorningTheory);

const btnEve = document.getElementById("btn-evening-theory");
if (btnEve) btnEve.addEventListener("click", selectEveningTheory);

const btnClear = document.getElementById("btn-clear-table");
if (btnClear) btnClear.addEventListener("click", clearTable);

//Selection of school
let loadedData = {};
let school = null;
let selectedSubjectCode = null;

document.getElementById("school-select").addEventListener("change", async (e) => {
    school = e.target.value;
    if (!school) return;

    const res = await fetch(schoolFiles[school]);
    const data = await res.json();
    loadedData[school] = data;

    setupSubjectAutocomplete(data);
});

//subject-dropdown-cum-searchbar

function setupSubjectAutocomplete(data) {
    const input = document.getElementById("subject-search");
    const suggestionsBox = document.getElementById("subject-suggestions");
    const allCodes = Object.keys(data);

    input.value = "";
    selectedSubjectCode = null;

    input.oninput = () => {
        const query = input.value.trim().toLowerCase();
        selectedSubjectCode = null;
        suggestionsBox.innerHTML = "";

        const matches = query
            ? allCodes.filter(code => code.toLowerCase().includes(query)).slice(0, 30)
            : allCodes.slice(0, 30);

        if (matches.length === 0) {
            suggestionsBox.style.display = "none";
            return;
        }

        matches.forEach(code => {
            const item = document.createElement("div");
            item.className = "suggestion-item";
            item.textContent = code;
            item.addEventListener("click", () => {
                input.value = code;
                selectedSubjectCode = code;
                suggestionsBox.innerHTML = "";
                suggestionsBox.style.display = "none";
                onSubjectChosen(code);
            });
            suggestionsBox.appendChild(item);
        });

        suggestionsBox.style.display = "block";
    };

    input.onfocus = () => input.dispatchEvent(new Event("input"));

    document.addEventListener("click", (e) => {
        if (e.target !== input) suggestionsBox.style.display = "none";
    });
}

function onSubjectChosen(code) {
    const facprint = document.getElementById("faculty-printer");
    const facArray = loadedData[school][code].faculty;

    let html = `
        <div class="faculty-toolbar">
            <span class="faculty-count">${facArray.length} Faculty Available</span>
            <button id="select-all" type="button" class="btn-select-all">Select All</button>
        </div>
        <div class="faculty-list">
    `;
    facArray.forEach((fac, idx) => {
        const slotText = fac.slots ? fac.slots.join("+") : "";
        html += `
            <label class="faculty-item">
                <input type="checkbox" value="${idx}">
                <div class="faculty-info">
                    <span class="faculty-name">${fac.name}</span>
                    ${slotText ? `<span class="faculty-slot-tag">${slotText}</span>` : ""}
                </div>
            </label>
        `;
    });
    html += `</div>`;
    facprint.innerHTML = html;

    const selectAllBtn = document.getElementById("select-all");
    selectAllBtn.addEventListener("click", () => {
        const checkboxes = document.querySelectorAll("#faculty-printer input[type='checkbox']");
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        checkboxes.forEach(cb => cb.checked = !allChecked);
        selectAllBtn.textContent = allChecked ? "Select All" : "Deselect All";
    });
}

//ADDS subject button
document.getElementById("add-subject").addEventListener("click",() =>{

    const manualchecker = document.getElementById("manual-button")

    if(manualchecker.checked===true)
    {
        const subtype = document.getElementById("subject-type").value;
        const subname = document.getElementById("manual-sub-name").value;
        if(!subname){alert("Enter subject name");return;}
        let facultyList = [];
        if(subtype==="Theory"||subtype==="Lab"){
            const theorytext = document.getElementById("theory").value;
            if(!theorytext){alert("No faculties entered.");return;}
            console.log(theorytext);
            facultyList = parseFacultyBlock(theorytext);
            console.log(facultyList);
        }

        if (subtype === "Theory") {
            const seen = {};
            for (const fac of facultyList) {
                const key = fac.slots.join("+");
                if (!seen[key]) seen[key] = { name: `Any ${key} faculty`, slots: fac.slots };
            }
            facultyList = Object.values(seen);
        }
        
        if(subtype ==="Theory+Lab"){
            const theorytext = document.getElementById("theory").value;
            const labtext = document.getElementById("theory+lab").value;
            if(!theorytext||!labtext){alert("No faculty entered in one of the boxes.");return;}
            facultyList = mergeTheoryLab(parseFacultyBlock(theorytext),parseFacultyBlock(labtext));
        }
        for(const sub of subFac)
        {
            if(sub.name===subname){alert("subject already added.");return;}
        }
        subFac.push({subject:subname,faculty:facultyList});
        console.log(subFac);
        renderSelectedSubjects();

        return;

    }

    const code = selectedSubjectCode;
    if(!code) return;
    const facArray = loadedData[school][code].faculty;


    let chosenFac = Array.from(
        document.querySelectorAll("#faculty-printer input[type='checkbox']:checked")).map(cb => facArray[cb.value]);

    if (chosenFac.length === 0) {
        alert("No faculty have been chosen");
        return;
        console.log(chosenFac);
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

    if (subFac.some(s => s.subject === code)) {
    alert("Subject already added.");
    return;
    }
    subFac.push({ subject: code, faculty: chosenFac });
    document.getElementById("subject-search").value = "";
    selectedSubjectCode = null;
    
    renderSelectedSubjects();
});

//Generating the combos

document.getElementById("generate").addEventListener("click", () => {
    if (subFac.length === 0) {
        alert("No subjects added.");
        return;
    }

    let filtered = filterSubFac();
    if(document.getElementById("condensed-button").checked===true)
    filtered = slimFilter(filtered);

    const results = solvePnc(0, [], [],filtered);

    if (results.length === 0) {
        alert("No valid timetable possible.");
        return;
    }

    renderResults(results);
});


//renderer
function renderResults(results) {
    const container = document.getElementById("results");
    container.innerHTML = "";

    const titleBar = document.getElementById("results-title-bar");
    if (titleBar) {
        titleBar.style.display = results.length > 0 ? "block" : "none";
    }

    results.forEach((schedule, idx) => {
        let cardsHtml = "";
        schedule.forEach(entry => {
            const slotBadges = entry.fac.slots.map(s => `<span class="slot-badge">${s}</span>`).join(" ");
            cardsHtml += `
                <div class="subject-card">
                    <div class="subject-card-title">${entry.subject}</div>
                    <div class="subject-card-fac"><strong>Faculty:</strong> ${entry.fac.name}</div>
                    <div class="subject-card-slots"><strong>Slots:</strong> ${slotBadges}</div>
                </div>
            `;
        });

        const card = `
            <div class="result-card">
                <div class="result-card-header">
                    <span class="tt-badge">Option ${idx + 1}</span>
                    <span class="tt-sub-count">${schedule.length} Courses</span>
                </div>
                <div class="result-schedule-list">
                    ${cardsHtml}
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}


//SOLVER 


function solvePnc(subIdx, currentSchedule, currentOccupied, filtered) {
    if (subIdx === filtered.length) {
        return [currentSchedule];
    }

    const allValid = [];

    for (const fac of filtered[subIdx].faculty) {
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
                [...currentOccupied, ...fac.slots],
                filtered
            );
            allValid.push(...res);

            if (allValid.length >= 1000) return allValid;
        }
    }

    return allValid;
}

//subject renderer
function renderSelectedSubjects() {
    const container = document.getElementById("selected-subjects");
    container.innerHTML = "";

    const filtered = filterSubFac();
    const titleBar = document.getElementById("selected-title-bar");
    if (titleBar) {
        titleBar.style.display = filtered.length > 0 ? "block" : "none";
    }

    filtered.forEach((sub, idx) => {
        const facList = sub.faculty.map(fac => 
            `<div class="selected-fac-item">
                <span class="fac-name">${fac.name}</span>
                <span class="fac-slots">${fac.slots.join("+")}</span>
            </div>`
        ).join("");

        container.innerHTML += `
            <div class="selected-subject-card">
                <div class="selected-sub-header">
                    <h4>${sub.subject}</h4>
                    <button class="btn-delete" onclick="deleteSubject(${idx})" title="Remove course">&times;</button>
                </div>
                <div class="selected-fac-list">
                    ${facList}
                </div>
            </div>
        `;
    });
}

//subject deleter
function deleteSubject(idx) {
    subFac.splice(idx, 1);
    renderSelectedSubjects();
}

//manual inputs handlers here

//manual input panel display
document.getElementById("manual-button").addEventListener("change",(e)=>{
    document.getElementById("auto-mode").style.display = e.target.checked?"none":"block";
    document.getElementById("manual-mode").style.display = e.target.checked?"block":"none";
});

document.getElementById("subject-type").addEventListener("change", async(e)=>{
    const container = document.getElementById("text-box-printer");
    if(!e.target.value) container.innerHTML = ``;
    if(e.target.value === "Theory" || e.target.value === "Lab"){
        container.innerHTML = `
        <label class="form-label" style="margin-top:10px;">Paste ${e.target.value} Block</label>
        <textarea rows="6" id="theory" class="custom-textarea" placeholder="Paste slot / room / faculty text here..."></textarea>
        `;
    }
    if(e.target.value === "Theory+Lab"){
        container.innerHTML = `
        <label class="form-label" style="margin-top:10px;">Paste Theory Block</label>
        <textarea rows="5" id="theory" class="custom-textarea" placeholder="Paste Theory slots..."></textarea>
        <label class="form-label">Paste Lab Block</label>
        <textarea rows="5" id="theory+lab" class="custom-textarea" placeholder="Paste Lab slots..."></textarea>
        `;
    }
});

//functions to handle raw text

function parseFacultyBlock(raw) {
    const entries = [];
    for (const line of raw.trim().split("\n")) {
        const parts = line.trim().split(/\s{2,}/);
        console.log(parts)
        if (parts.length < 3) continue;
        const slots = parts[0].split("+");
        const room = parts[1].trim();
        const name = parts[2].trim();
        entries.push({ name, slots, theory_room: room, lab_room: null });
    }
    return entries;
}

function getSession(slot) {
    if (slot.startsWith("L")) return parseInt(slot.slice(1)) <= 30 ? "morning" : "evening";
    return slot.endsWith("1") ? "morning" : "evening";
}

function mergeTheoryLab(theoryList, labList) {
    const merged = [];
    const usedLab = new Set();

    for (const t of theoryList) {
        const tSession = getSession(t.slots[0]);
        let match = null;

        for (let i = 0; i < labList.length; i++) {
            if (usedLab.has(i)) continue;
            const lSession = getSession(labList[i].slots[0]);
            if (labList[i].name === t.name && tSession !== lSession) {
                match = { idx: i, entry: labList[i] };
                break;
            }
        }

        if (!match) {
            console.warn(`No valid lab match for ${t.name}`);
            continue;
        }

        usedLab.add(match.idx);
        merged.push({
            name: t.name,
            slots: [...t.slots, ...match.entry.slots],
            theory_room: t.theory_room,
            lab_room: match.entry.theory_room
        });
    }
    return merged;
}

//filters the faculty

function filterSubFac() {
    return subFac.map(sub => ({
        ...sub,
        faculty: sub.faculty.filter(fac =>
            fac.slots.every(slot => constraint.includes(slot))
        )
    }));
}

function slimFilter(filtered) {
    for (const sub of filtered) {

        const groups = {};

        for (const fac of sub.faculty) {

            const key = fac.slots.join("+");

            if (!groups[key]) {
                groups[key] = {
                    ...fac
                };
            } else {
                groups[key].name += " / " + fac.name;
            }
        }

        sub.faculty = Object.values(groups);
    }

    return filtered;
}

//rerun generate after clicking clicking condense
document.getElementById("condensed-button").addEventListener("change",(e)=>{
    document.getElementById("generate").click();
})