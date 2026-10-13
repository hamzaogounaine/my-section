const faculties = [
    {
        id: "fsjes-agadir",
        code: "FSJES Agadir",
        title: "كلية العلوم القانونية والاقتصادية والاجتماعية",
        campus: "القطب الجامعي - أكادير",
        badge: "جامعة ابن زهر",
        classes: [
            {
                id: 1,
                name: "GESTION S3 2026/2027",
                boundes: [
                    { id: 1, section: "A", start: "AABA", end: "AZNAGUE" },
                    { id: 2, section: "B", start: "AZNAGY", end: "AZNAGY" },
                    { id: 3, section: "C", start: "CHAJIAI", end: "ELHARROUCHI" },
                    { id: 4, section: "D", start: "ELHAROUCHY", end: "JALLAL" },
                    { id: 5, section: "E", start: "JALLALI", end: "OUAKERRI" },
                    { id: 6, section: "F", start: "OUAKERRY", end: "ZYATI" },
                ]
            },
            {
                id: 2,
                name: "ECONOMIE S3 2026/2027",
                boundes: [
                    { id: 1, section: "A", start: "AABEIDE", end: "EL YAAGOUBI" },
                    { id: 2, section: "B", start: "EL YAAGOUBY", end: "ZYATI" }
                ]
            },
            {
                id: 3,
                name: "GESTION S1 2026/2027",
                boundes: [
                    { id: 1, section: "A", start: "AABADA", end: "AKDIM" },
                    { id: 2, section: "B", start: "AKDIME", end: "BARJA" },
                    { id: 3, section: "C", start: "BARJI", end: "BOUNOUH" },
                    { id: 4, section: "D", start: "BOUNOUHI", end: "EL GOUM" },
                    { id: 5, section: "E", start: "EL GOUMY", end: "ERRAGRAGUI" },
                    { id: 6, section: "F", start: "ERRAGRAGUY", end: "IGOURRAMEN" },
                    { id: 7, section: "G", start: "IGOURRAMENE", end: "MANGOUF" },
                    { id: 8, section: "H", start: "MANGOUFI", end: "OUTENFITE" },
                    { id: 9, section: "I", start: "OUTENFITI", end: "ZYATI" }
                ]
            },
            {

                id: 4,
                name: "ECONOMIE S1 2026/2027",
                boundes: [
                    { id: 1, section: "A", start: "AABAID", end: "ELAABBOUZ" },
                    { id: 2, section: "B", start: "ELAABBOUZI", end: "ZOURI" }
                ]
            }
        ]
    },
    {
        id: "fsjes-ait-melloul",
        code: "FSJES Ait Melloul",
        title: "كلية العلوم القانونية والاقتصادية والاجتماعية",
        campus: "المركب الجامعي - أيت ملول",
        badge: "جامعة ابن زهر",
        classes: [
            {
                id: 1,
                name: "GESTION S3 2026/2027"
            },
            {
                id: 2,
                name: "ECONOMIE S3 2026/2027"
            },
            {
                id: 3,
                name: "GESTION S1 2026/2027"
            },
            {
                id: 4,
                name: "ECONOMIE S1 2026/2027"
            }
        ]
    }
];


const normalize = (str) =>
    str
        ? str
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "")
            .toUpperCase()
        : "";

const determineSection = (facId, classId, lastName) => {
    if (!lastName) return null;
    const name = normalize(lastName);

    const fac = faculties.find((el) => el.id === facId);
    const cls = fac?.classes?.find((el) => el.id === classId);
    const intervals = cls?.boundes;

    if (!intervals || intervals.length === 0) return null;

    // A name belongs to the first section whose upper ceiling (`end`)
    // is greater than or equal to the name.
    for (let i = 0; i < intervals.length; i++) {
        const currentEnd = normalize(intervals[i].end);

        if (name <= currentEnd) {
            return intervals[i].section;
        }
    }

    // If beyond the last listed end, falls into the final section
    return intervals[intervals.length - 1].section;
};
export { faculties, determineSection };