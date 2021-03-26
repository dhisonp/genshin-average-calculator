function formula(atk, cr, cd, ele, mod) {
    cr /= 100;
    cd /= 100;
    ele = 1 + (ele / 100);
    mod === 0 ? mod++ : mod /= 100;
    return (atk * (1 + cr * cd)) * ele * mod;
}

export default formula;