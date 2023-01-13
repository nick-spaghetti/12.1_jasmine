describe('calculate taxes', () => {
   it('should calculate low-bracket', function () {
      expect(calculateTaxes(10000)).toEqual(1500);
      expect(calculateTaxes(20000)).toEqual(3000);
   });
   it('should calculate high-bracket', function () {
      expect(calculateTaxes(50000)).toEqual(12500);
      expect(calculateTaxes(80000)).toEqual(20000);
   });
})

describe('remove duplicates', () => {
   it('should remove duplicates from an array', () => {
      expect(() => {
         calculateTaxes('askdalkdj')
      }).toThrowError()
      expect(() => {
         calculateTaxes([])
      }).toThrowError()
      expect(() => {
         calculateTaxes(true)
      }).toThrowError()
   })
})