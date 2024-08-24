function fractionAddition(expression) {
    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return Math.abs(a);
    }

    function lcm(a, b) {
        return Math.abs(a * b) / gcd(a, b);
    }

    function parseFraction(fraction) {
        const [numerator, denominator] = fraction.split('/').map(Number);
        return { numerator, denominator };
    }

    const fractionRegex = /([+-]?\d+\/\d+)/g;

    let match;
    let fractions = [];
    while ((match = fractionRegex.exec(expression)) !== null) {
        fractions.push(parseFraction(match[1]));
    }

    let result = { numerator: 0, denominator: 1 };

    for (const fraction of fractions) {
        const { numerator, denominator } = fraction;
        const commonDenominator = lcm(result.denominator, denominator);
        result.numerator = result.numerator * (commonDenominator / result.denominator) + numerator * (commonDenominator / denominator);
        result.denominator = commonDenominator;

        const commonDivisor = gcd(result.numerator, result.denominator);
        result.numerator /= commonDivisor;
        result.denominator /= commonDivisor;
    }

    if (result.denominator === 1) {
        return `${result.numerator}/1`;
    }

    return `${result.numerator}/${result.denominator}`;
}

