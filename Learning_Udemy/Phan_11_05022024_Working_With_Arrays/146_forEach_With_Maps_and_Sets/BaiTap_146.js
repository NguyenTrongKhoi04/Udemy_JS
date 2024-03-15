'use strict';

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);

/**
 * * Sử dụng những dữ liệu cho sẵn 
 * TODO 1) forEach với currencies =>> output: `${key}: ${value}`
 * TODO 2) làm giống 1) 
 *          ! trong forEach =>> function (value, key, arr){....} =>> bắt buộc khai báo đối số giống như này
 */