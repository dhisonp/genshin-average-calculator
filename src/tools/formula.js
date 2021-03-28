import multiplicative from './em';

function formula(atk, em, cr, cd, ele, mod, reaction = 0) { //Multiplicative (Vape/Melt) reactions only.
    cr = cr > 100 ? 1 : cr / 100
    cd /= 100;
    ele = 1 + (ele / 100);
    mod === 0 ? mod++ : mod /= 100;
    em = reaction === 0 ? 1 : 1 + multiplicative(em);

    var reactionMultiplier = reaction === 0 ? 1 : 1 + (1 / reaction);
    return (atk * (1 + cr * cd)) * ele * mod * em * reactionMultiplier; //reformat en ad reactionMultiplier
    // return em;
}

export default formula;