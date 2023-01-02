const assert = require("assert");
const sinon = require("sinon");
describe('CalculatriceService', function() {

  describe('additionner()', function() {
    it('should add two values', function (done) {


      // Setup
      let a = 5;
      let b = 6;

      // Execution
      let result = CalculatriceService.additionner(a , b);

      //Verification
      assert.equal(result , 11);

      return done();
    });
  });

  describe('#diviser()', function() {
    it('should divide two values', function (done) {
      let a  = 15;
      let b = 5;

      let result = CalculatriceService.diviser(a , b);

      assert.equal(result , 3);

      return done()
    });

    it('should not divide by 0', function (done) {
      let a  = 15;
      let b = 0;

      assert.throws(() => {CalculatriceService.diviser(a , b) }, { message: 'Divide by 0 is not allowed'});
      return done()

    })
  })

  describe('#pourcentage()', function() {
    it('should calculate a percentage', function (done) {
      //Setup / mock
      let a  = 100;
      let b = 20;
      let stubMultiplier = sinon.stub(CalculatriceService, 'multiplier').callsFake((a , b) => {return 100})
      let stubDiviser =  sinon.stub(CalculatriceService, 'diviser').callsFake((a , b) => {return 20})

      // Execution
      let result = CalculatriceService.pourcentage(a , b)

      // Verif
      assert.equal(result , 20);

      // Clean
      stubMultiplier.restore();
      stubDiviser.restore();

      return done();
    })

    describe('#puissance()', function() {
      it('should calculate a pow', function (done) {
        let a = 3;
        let b = 3;

        let stubMultiplier = sinon.stub(CalculatriceService, 'multiplier').callsFake((a , b) => {return 27})
        let result = CalculatriceService.puissance(a, b)
        assert.equal(result , 27);

        stubMultiplier.restore()
        return done();
      })

      it('should call multiplier() function n times', function (done) {
        let a = 3;
        let b = 3;
        let spy = sinon.spy(CalculatriceService, 'multiplier')

        let result = CalculatriceService.puissance(a, b)
        assert.equal(spy.callCount , 2);
        return done();
      })
    });


  })


});
