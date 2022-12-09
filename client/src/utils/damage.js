
export const onattack = ({ attacker, receiver }) => {
    const receivedDamage = attacker.attack - (attacker.level - receiver.level) * 1.00;

    const finalDamage = receivedDamage - receiver.defense / 2;

    return finalDamage;
};

export const onstrike = ({ attacker, receiver }) => {
    const receivedDamage = attacker.strike - (attacker.level - receiver.level) * 1.25;

    const finalDamage = receivedDamage - receiver.defense / 2;

    return finalDamage;
};

export const oncounter = ({ attacker, receiver }) => {
    const receivedDamage = attacker.strike - (attacker.level - receiver.level) * 1.25;

    const finalDamage = receivedDamage - receiver.defense / 2;

    return finalDamage;
};

export const ondefend = ({ attacker, receiver }) => {
    const receivedDamage = attacker.strike - (attacker.level - receiver.level) * 1.25;

    const finalDamage = receivedDamage - receiver.defense / 2;

    return finalDamage;
};




