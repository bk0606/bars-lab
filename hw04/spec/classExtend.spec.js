describe('ClassExtend > ', function() {
  it('Class должен быть объявлен', function() {
    expect(Class).toBeDefined();
  });
  it('Метод Class.extend должен быть объявлен', function() {
    expect(Class.extend).toBeDefined();
  });
  it('Метод Class.mixin должен быть объявлен', function() {
    expect(Class.mixin).toBeDefined();
  });
});

describe('ClassExtend in action > ', function() {
	var BatMobile, BatMoto;

  beforeEach(function() {

    BatMobile = Class.extend(
    	/* prototype props: */ {
	      init: function(owner) {
	        this.owner = owner;
	        this.currenLocation = 'Waynes house',
	        this.maxSpeed = 300
	      }
      }, 
    	/* static props: */ {
	      getManufacturer: function() {
	        return 'Made in China';
	      },
	      copyright: 'Wayne Inc.'
	    }
    );

    BatMoto = BatMobile.extend({
    	init: function (owner) {
    		// Вызов родительского конструктора
    		this.super.init.apply(this, arguments);
        this.maxSpeed = 400;
    	}
    });

    // Можем применить mixin даже после наследования,
    // И этот метод всё равно будет доступен потомку (BatMoto)
    BatMobile.mixin({
    	goTo: function(location) {
        this.currenLocation = location;
      }
    });

  });

  describe('Class.extend > ', function() {
    it('Класс BatMobile должен быть объявлен', function() {
      expect(BatMobile).toBeDefined();
      expect(BatMoto).toBeDefined();
    });
    it('Статические поля и методы должны быть доступны через класс', function() {
      expect(BatMobile.getManufacturer).toBeDefined();
      expect(BatMobile.getManufacturer()).toBe('Made in China');
      expect(BatMobile.copyright).toBeDefined();
      expect(BatMobile.copyright).toBe('Wayne Inc.');
    });
    it('Поля и методы экземпляра не должны быть доступны через класс', function() {
      expect(BatMobile.owner).toBeUndefined();
      expect(BatMobile.maxSpeed).toBeUndefined();
      expect(BatMobile.goTo).toBeUndefined();
      expect(BatMoto.owner).toBeUndefined();
      expect(BatMoto.maxSpeed).toBeUndefined();
      expect(BatMoto.goTo).toBeUndefined();
    });
  });

  describe('Class.mixin > ', function () {
  	it('Метод goTo должен быть доступен и родителю и потомку', function () {
  		expect(BatMobile.prototype.goTo).toBeDefined();
  		expect(BatMoto.prototype.goTo).toBeDefined();
  	})
  });

  describe('Создание классов > ', function() {
  	var batMobile, batMoto;

    beforeEach(function() {
      batMobile = new BatMobile('Batman');
      batMoto = new BatMoto('Robin');
    });

    it('Создание объекта', function() {
      expect(batMobile).toBeDefined();
      expect(batMoto).toBeDefined();
    });

    it('Поля, значения которых переданы при создании, должны быть проинициализированы', function() {
      expect(batMobile.owner).toBe('Batman');
      expect(batMoto.owner).toBe('Robin');
    });

    it('Поля и методы экземпляра должны быть доступны через объект', function() {
      expect(batMobile.goTo).toBeDefined();
      expect(batMobile.maxSpeed).toBe(300);
      expect(batMobile.owner).toBe('Batman');

      expect(batMoto.goTo).toBeDefined();
      expect(batMoto.maxSpeed).toBe(400);
      expect(batMoto.owner).toBe('Robin');
    });

    it('Вызов методов экземпляра', function() {
      var location1 = 'Waynes skyscraper',
          location2 = 'Catwoman house';
      batMobile.goTo(location1);
      batMoto.goTo(location2);

      expect(batMobile.currenLocation).toEqual(location1);
      expect(batMoto.currenLocation).toEqual(location2);

      spyOn(batMobile, 'goTo');
      spyOn(batMoto, 'goTo');

      batMobile.goTo(location2);
      batMobile.goTo(location1);
      expect(batMobile.goTo).toHaveBeenCalled();
      expect(batMobile.goTo.calls.length).toEqual(2);

      batMoto.goTo(location2);
      expect(batMoto.goTo).toHaveBeenCalled();
      expect(batMoto.goTo.calls.length).toEqual(1);
    });

    it('Поле constructor экземпляра должно ссылаться на создавший его конструктор', function () {
    	expect(batMoto.constructor == BatMoto).toBe(true);
    	expect(batMobile.constructor == BatMobile).toBe(true);

    	expect(batMoto.constructor == BatMobile).toBe(false);
    	expect(batMobile.constructor == BatMoto).toBe(false);
    });

  });
});