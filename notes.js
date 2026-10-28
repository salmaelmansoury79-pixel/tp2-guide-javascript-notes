const etudiant = [
{ id: 1, nom: 'amine', note: 16 },
{ id: 2, nom: 'youssef', note: 8 },
{ id: 3, nom: 'salma', note: 14 },
{ id: 4, nom: 'omar', note: 12 }
];

function noteValide(note) {
    return Number.isFinite(note) && note >= 0 && note <= 20;
}
function moyenne(notes) {
    if (notes.length === 0) return null;
    const total = notes.reduce((somme, note) => somme + note, 0);
    return total / notes.length;
}
const notes = etudiant.map((e)=>e.note);
const admis = etudiant.filter(
    (e) => e.note >= 10);
    const lignes = etudiant.map(
        (e) => {
            const decision = e.note >= 10 ? 'admis' : 'ajourné';
            return `${e.nom} - ${e.note}/20 - ${decision}.`;
        });
         console.log('moyenne:', moyenne(notes));
          console.log('admis:', admis.length);

        for (const ligne of lignes) {
            console.log(ligne);
        }