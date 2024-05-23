function calculateTotal() {
    const essay1 = parseFloat(document.getElementById('essay1').value);
    const essay2 = parseFloat(document.getElementById('essay2').value);
    const presentation = parseFloat(document.getElementById('presentation').value);
    const discussion = parseFloat(document.getElementById('discussion').value);
    const summary = parseFloat(document.getElementById('summary').value);
    const reflection = parseFloat(document.getElementById('reflection').value);
    const final = parseFloat(document.getElementById('final').value);

    const maxPoints = {
        essay1: 22,
        essay2: 22,
        presentation: 30,
        discussion: 21,
        summary: 36,
        reflection: 4,
        final: 22
    };

    const weights = {
        essay1: 0.20,
        essay2: 0.25,
        presentation: 0.08,
        discussion: 0.07,
        summary: 0.10,
        reflection: 0.05,
        final: 0.25
    };

    const totalPoints = (essay1 / maxPoints.essay1) * weights.essay1 * 100 +
                        (essay2 / maxPoints.essay2) * weights.essay2 * 100 +
                        (presentation / maxPoints.presentation) * weights.presentation * 100 +
                        (discussion / maxPoints.discussion) * weights.discussion * 100 +
                        (summary / maxPoints.summary) * weights.summary * 100 +
                        (reflection / maxPoints.reflection) * weights.reflection * 100 +
                        (final / maxPoints.final) * weights.final * 100;

    document.getElementById('totalPoints').innerText = `Total Points: ${totalPoints.toFixed(2)}`;

    const letterGrade = calculateLetterGrade(totalPoints);
    document.getElementById('letterGrade').innerText = `Letter Grade: ${letterGrade}`;
}

function calculateLetterGrade(points) {
    if (points >= 95) return 'A';
    if (points >= 90) return 'A-';
    if (points >= 86) return 'B+';
    if (points >= 82) return 'B';
    if (points >= 78) return 'B-';
    if (points >= 74) return 'C+';
    if (points >= 70) return 'C';
    if (points >= 64) return 'C-';
    if (points >= 57) return 'D+';
    if (points >= 50) return 'D';
    return 'F';
}
