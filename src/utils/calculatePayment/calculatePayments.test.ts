// imports

import calculatePayment from './calculatePayment';
import { FormI } from '@/interfaces/interfaces';

// Mock of SetForm
const mockSetForm = jest.fn();

describe('calculatePayment', () => {

  it('should calculate the correct monthly payment for a Repayment type', () => {
    const form: FormI = {
      amount: { value: 300000, err: '' },
      term: { value: 25, err: '' }, // years
      rate: { value: 5.25, err: '' }, // annual interest rate in percentage
      type: { value: 'Repayment', err: '' }
    };

    const result = calculatePayment(form, mockSetForm);
    const expected = 1797.74; // Replace with the correct expected value based on manual calculations

    expect(result).toBeCloseTo(expected, 2);
  });

  it('should calculate the correct monthly payment for an Interest Only type', () => {
    const form: FormI = {
      amount: { value: 100000, err: '' },
      term: { value: 25, err: '' }, // years
      rate: { value: 5.25, err: '' }, // annual interest rate in percentage
      type: { value: 'Interest Only', err: '' }
    };

    const result = calculatePayment(form, mockSetForm);
    const expected = 437.5; // Replace with the correct expected value based on manual calculations

    expect(result).toBeCloseTo(expected, 2);
  });

  it('should return undefined if there are validation errors', () => {
    const form: FormI = {
      amount: { value: undefined, err: 'Amount is required' },
      term: { value: undefined, err: 'Term is required' },
      rate: { value: undefined, err: 'Rate is required' },
      type: { value: 'Repayment', err: '' }
    };

    const result = calculatePayment(form, mockSetForm);

    expect(result).toBeUndefined();
    expect(mockSetForm).toHaveBeenCalled();
  });

});
