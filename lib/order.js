class Order {
    name;
    deliveryMinute;
    #COOK_TIME = 20;
    #drivingDistanceInMinutes;
    get startMinute() {
      return this.deliveryMinute - (this.#COOK_TIME + this.#drivingDistanceInMinutes);    
    }
        
    constructor(name, deliveryMinute, drivingDistanceInMiles) {
      this.name = name;
      this.deliveryMinute = deliveryMinute;
      this.#drivingDistanceInMinutes = drivingDistanceInMiles;
    }
}

module.exports = Order;
