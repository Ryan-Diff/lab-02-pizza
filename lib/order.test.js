const Order = require('./order');

describe('Order class', () => {
  it('should return the correct value for startMinute', () => {
    const order = new Order('my great order', 50, 20);

    expect(order.startMinute).toEqual(10);
  });
});
