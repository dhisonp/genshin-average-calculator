function multiplicative(em) {
    em = em === '' ? 0 : Number.parseInt(em) //parseInt() returns NULL if value is '',
    const x = (278 * em) / (em + 1400)       //whereas JS receives NULL as 0 in arithmetics.
    // alert(`EM: ${em}, calc: ${x}`)
    return x / 100;
}

// function additive(em) {
//     return 0;
// }

// console.log(multiplicative(307));

export default multiplicative;