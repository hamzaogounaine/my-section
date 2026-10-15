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
                    { id: 2, section: "B", start: "AZNAGY", end: "CHAJIA" },
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
            },
            {

                id: 5,
                name: "السداسي الأول : مسلك القانون العام - جذع مشترك 2026/2027",
                boundes: [
                    { id: 1, section: "A", start: "AABID", end: "BEN HAJJAJ" },
                    { id: 2, section: "B", start: "BEN HAJJAJI", end: "EL MAAZI" },
                    { id: 3, section: "C", start: "EL MAAZY", end: "KOUDAN" },
                    { id: 4, section: "D", start: "KOUDANI", end: "ZYATI" }
                ]
            },
            {

                id: 6,
                name: "السداسي الأول : مسلك القانون الخاص - جذع مشترك 2026/2027",
                boundes: [
                    { id: 1, section: "A", start: "AABA", end: "AGHAD" },
                    { id: 2, section: "B", start: "AGHADI", end: "AIT LHYANE" },
                    { id: 3, section: "C", start: "AIT LHYANI", end: "AMALLAZ" },
                    { id: 4, section: "D", start: "AMALLAZI", end: "ATTAR" },
                    { id: 5, section: "E", start: "ATTARI", end: "BASSIM" },
                    { id: 6, section: "F", start: "BASSIMI", end: "BHIJA" },
                    { id: 7, section: "G", start: "BHIJI", end: "BOULAK" },
                    { id: 8, section: "H", start: "BOULAKI", end: "CHAKRI" },
                    { id: 9, section: "I", start: "CHAKRY", end: "EL AALLALI" },
                    { id: 10, section: "J", start: "EL AALLALY", end: "EL HOUSSAINI" },
                    { id: 11, section: "K", start: "EL HOUSSAINY", end: "ELBOAZZAOUI" },
                    { id: 12, section: "L", start: "ELBOAZZAOUY", end: "ERRASSIFI" },
                    { id: 13, section: "M", start: "ERRASSIFY", end: "HABAD" },
                    { id: 14, section: "N", start: "HABADI", end: "IDLAHCEN" },
                    { id: 15, section: "O", start: "IDLAHCENE", end: "KHALIFA" },
                    { id: 16, section: "P", start: "KHALIFI", end: "LOUHOU" },
                    { id: 17, section: "Q", start: "LOUHOUI", end: "NKHILI" },
                    { id: 18, section: "R", start: "NKHILY", end: "OUMLOUL" },
                    { id: 19, section: "S", start: "OUMLOULI", end: "SIADI" },
                    { id: 20, section: "T", start: "SIADY", end: "ZYOUGUAY" },

                ]
            },
            {

                id: 7,
                name: "السداسي الثالث : مسلك القانون العام - جذع مشترك 2026/2027",
                boundes: [
                    { id: 1, section: "A", start: "AABID", end: "BELLATI" },
                    { id: 2, section: "B", start: "BELLATY", end: "EL KARZABI" },
                    { id: 3, section: "C", start: "EL KARZABY", end: "KERRAMI" },
                    { id: 4, section: "D", start: "KERRAMY", end: "ZOUINE" }
                ]
            },
            {

                id: 8,
                name: "السداسي الثالث : مسلك القانون الخاص - جذع مشترك 2026/2027",
                boundes: [

                    { id: 1, section: "A", start: "AABACH", end: "AIT BACH" },
                    { id: 2, section: "B", start: "AIT BACHI", end: "AMHRI" },
                    { id: 3, section: "C", start: "AMHRY", end: "BAHNINE" },
                    { id: 4, section: "D", start: "BAHNINI", end: "BILLA" },
                    { id: 5, section: "E", start: "BILLAA", end: "BOUSSOUSS" },
                    { id: 6, section: "F", start: "BOUSSOUSSE", end: "EDDARAI" },
                    { id: 7, section: "G", start: "EDDARAY", end: "EL MANSOURI" },
                    { id: 8, section: "H", start: "EL MANSOURY", end: "ELOUARDI" },
                    { id: 9, section: "I", start: "ELOUARDY", end: "HALLAL" },
                    { id: 10, section: "J", start: "HALLALI", end: "JELAIDI" },
                    { id: 11, section: "K", start: "JELAIDY", end: "LHADDANE" },
                    { id: 12, section: "L", start: "LHADDANI", end: "OUAHMANE" },
                    { id: 13, section: "M", start: "OUAHMANI", end: "SAAID" },
                    { id: 14, section: "N", start: "SAAIDI", end: "ZYOUGUAY" }

                ]
            },
            {

                id: 9,
                name: "السداسي الثالث : مسلك القانون العام - جذع مشترك (اللغة الفرنسية) 2026/2027",
                boundes: [
                    { id: 1, section: "Fr-A", start: "AABID", end: "EL KARZABI" },
                    { id: 2, section: "Fr-B", start: "EL KARZABY", end: "ZOUINE" }
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
                name: "S1 TC Gestion 2026/2027",
                boundes: [
                    { id: 1, section: "Section 1", start: "AAAA", end: "ALZZ" },
                    { id: 2, section: "Section 2", start: "AMAA", end: "CGZZ" },
                    { id: 3, section: "Section 3", start: "CHAA", end: "EL Z" },
                    { id: 4, section: "Section 4", start: "ELAA", end: "IWZZ" },
                    { id: 5, section: "Section 5", start: "IXAA", end: "QAZZ" },
                    { id: 6, section: "Section 6", start: "QBAA", end: "ZZZZ" }
                ]
            },
            {
                id: 2,
                name: "S3 TC Gestion 2026/2027",
                boundes: [
                    { id: 1, section: "Section 1", start: "AAAA", end: "BELA" },
                    { id: 2, section: "Section 2", start: "BEMA", end: "EL Z" },
                    { id: 3, section: "Section 3", start: "ELAA", end: "LAFZ" },
                    { id: 4, section: "Section 4", start: "LAGA", end: "ZZZZ" }
                ]
            },
            {
                id: 3,
                name: "S5 CCA 2026/2027",
                boundes: [
                    { id: 1, section: "Section 1", start: "AAAA", end: "CEZZ" },
                    { id: 2, section: "Section 2", start: "CFAA", end: "IVZZ" },
                    { id: 3, section: "Section 3", start: "IWAA", end: "ZZZZ" }
                ]
            },
            {
                id: 4,
                name: "S5 CFA 2026/2027",
                boundes: [
                    { id: 1, section: "Section 1", start: "AAAA", end: "DAZZ" },
                    { id: 2, section: "Section 2", start: "DBAA", end: "IVZZ" },
                    { id: 3, section: "Section 3", start: "IWAA", end: "ZZZZ" }
                ]
            },
            {
                id: 5,
                name: "S5 MMO 2026/2027",
                boundes: [
                    { id: 1, section: "Section 1", start: "AAAA", end: "EL G" },
                    { id: 2, section: "Section 2", start: "EL H", end: "ZZZZ" }
                ]
            },
            {
                id: 6,
                name: "S1 TC Économie 2026/2027",
                boundes: [
                    { id: 1, section: "Section 1", start: "AAAA", end: "EL Z" },
                    { id: 2, section: "Section 2", start: "ELAA", end: "ZZZZ" }
                ]
            },
            {
                id: 7,
                name: "S3 TC Économie 2026/2027",
                boundes: [
                    { id: 1, section: "Section 1", start: "AAAA", end: "EL Z" },
                    { id: 2, section: "Section 2", start: "ELAA", end: "ZZZZ" }
                ]
            },
            {
                id: 8,
                name: "S5 Économie Appliquée 2026/2027",
                boundes: [
                    { id: 1, section: "Section 1", start: "AAAA", end: "ZZZZ" }
                ]
            },
            {
                id: 9,
                name: "S5 Économétrie 2026/2027",
                boundes: [
                    { id: 1, section: "Section 1", start: "AAAA", end: "ZZZZ" }
                ]
            },
            {

                id: 10,
                name: "السداسي الثالث : مسلك القانون الخاص - جذع مشترك 2026/2027",
                boundes: [

                    { id: 1, section: "1", start: "Aa", end: "Ak" },
                    { id: 2, section: "2", start: "Al", end: "Be" },
                    { id: 3, section: "3", start: "Bf", end: "Dz" },
                    { id: 4, section: "4", start: "Ea", end: "El" },
                    { id: 5, section: "5", start: "Em", end: "Hz" },
                    { id: 6, section: "6", start: "Ia", end: "Lz" },
                    { id: 7, section: "7", start: "Ma", end: "Oz" },
                    { id: 8, section: "8", start: "Pa", end: "Zz" }

                ]
            },
            {

                id: 11,
                name: "السداسي الثالث : مسلك القانون العام - جذع مشترك 2026/2027",
                boundes: [
                    { id: 1, section: "1", start: "Aa", end: "Dz" },
                    { id: 2, section: "2", start: "Ea", end: "Zz" },
                ]
            },
            {

                id: 12,
                name: "السداسي الأول : مسلك القانون الخاص - جذع مشترك 2026/2027",
                boundes: [
                    { id: 1, section: "1", start: "Aa", end: "Ad" },
                    { id: 2, section: "2", start: "Ae", end: "Ak" },
                    { id: 3, section: "3", start: "Ai", end: "An" },
                    { id: 4, section: "4", start: "Ao", end: "Ba" },
                    { id: 5, section: "5", start: "Bb", end: "Bh" },
                    { id: 6, section: "6", start: "Bi", end: "Dz" },
                    { id: 7, section: "7", start: "Ea", end: "El" },
                    { id: 8, section: "8", start: "Em", end: "Hz" },
                    { id: 9, section: "9", start: "Ia", end: "Lz" },
                    { id: 10, section: "10", start: "Ma", end: "Oz" },
                    { id: 11, section: "11", start: "Pa", end: "Ta" },
                    { id: 12, section: "12", start: "Tb", end: "Zz" }

                ]
            },
            {

                id: 13,
                name: "السداسي الأول : مسلك القانون العام - جذع مشترك 2026/2027",
                boundes: [
                    { id: 1, section: "1", start: "Aa", end: "Dz" },
                    { id: 2, section: "2", start: "Ea", end: "Zz" }
                ]
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
            .replace(/\s+/g, " ")
            .toUpperCase()
        : "";

const determineSection = (facId, classId, lastName) => {

    if (!lastName) return null;
    const name = normalize(lastName);

    const fac = faculties.find((el) => el.id === facId);
    const cls = fac?.classes?.find((el) => el.id === classId);
    const intervals = cls?.boundes;

    if (!intervals || intervals.length === 0) return null;

    for (let i = 0; i < intervals.length; i++) {
        const start = normalize(intervals[i].start);
        const end = normalize(intervals[i].end);

        // A name belongs to this section if:
        // 1. It is lexicographically <= end, OR
        // 2. It starts with the boundary token itself (e.g. "AZNAGUE" matches "AZNAGUE")
        if (name <= end || name.startsWith(end)) {
            // Check that it doesn't precede the entire range
            if (i === 0 && name < start && !name.startsWith(start)) {
                return intervals[0].section;
            }
            return intervals[i].section;
        }
    }

    // Default to the last section if beyond all ceilings
    return intervals[intervals.length - 1].section;
};


export { faculties, determineSection };