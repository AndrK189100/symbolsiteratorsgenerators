export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) { throw new Error('has already'); }
    this.members.add(member);
    return true;
  }

  addAll(...members) {
    members.forEach((item) => this.members.add(item));
    return true;
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    let current = 1;
    const last = this.members.size;
    const members = this.members.values();
    return {
      next() {
        if (current > last) {
          return {
            done: true,
            // value: undefined
          };
        }
        current += 1;
        return {
          done: false,
          value: members.next().value,
        };
      },

    };
  }
}

//= ===================================================
//= ===================================================
//= ===================================================
//= ===================================================

export class Team2 {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) { throw new Error('has already'); }
    this.members.add(member);
    return true;
  }

  addAll(...members) {
    members.forEach((item) => this.members.add(item));
    return true;
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    const members = this.members.values();
    for (let current = 0; current < this.members.size; current += 1) {
      yield members.next().value;
    }
  }
}

// const d1 = new Daemon('Azrail');
// const d2 = new Daemon('Lucifer');
// const d3 = new Daemon('Asmodeus');
// const t = new Team2()
// t.addAll(d1,d2,d3);
// for(let i of t) {
//   console.log(i)

//  }
