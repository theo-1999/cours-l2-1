import * from index

describe('La fonction anagramme', () => {
  test('doit exister', () => {
    expect(anagrammes).toBeDefined();
    expect(typeof anagrammes).toEqual('function');
  });

  test('doit valider deux phrases anagrammes.', () => {
    expect(anagrams('hello', 'llohe')).toBeTruthy();
    expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
    expect(anagrams('RAIL! SAFETY!', 'fairy tales')).toBeTruthy();
  });

  test('doit refuser deux phrass qui ne sont pas des anagrammes.', () => {
    expect(anagrams('One One', 'Two two two')).toBeFalsy();
    expect(anagrams('One one', 'One one c')).toBeFalsy();
    expect(anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')).toBeFalsy();
  });
});


describe('La classe Stack', () => {
  test('doit être une classe', () => {
    expect(typeof Stack.prototype.constructor).toEqual('function');
  });

  test('doit pouvoir ajouter ou retirer des éléments.', () => {
    const s = new Stack();
    s.push(1);
    expect(s.pop()).toEqual(1);
    s.push(2);
    expect(s.pop()).toEqual(2);
  });

  test('doit suivre le principe du premier arrivé, premier parti.', () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.pop()).toEqual(3);
    expect(s.pop()).toEqual(2);
    expect(s.pop()).toEqual(1);
  });

  test('doit pouvoir retourner le premier élément sans le supprimer.', () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.peek()).toEqual(3);
    expect(s.pop()).toEqual(3);
    expect(s.peek()).toEqual(2);
    expect(s.pop()).toEqual(2);
    expect(s.peek()).toEqual(1);
    expect(s.pop()).toEqual(1);
  });
});
