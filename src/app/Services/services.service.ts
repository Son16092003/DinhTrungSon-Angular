import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor() {}

  product: Item[] = [
    {
      id: '1',
      url: 'https://cf.shopee.vn/file/bf4bf79dc5a8c0d4bad201bdfcf8dfe9',
      title: 'Thời trang Nam',
      description: 'Chất liệu vải phông cao cấp, phù hợp với mọi Nam',
      price: 249.999,
      stock: 30,
      quantity: 0,
    },
    {
      id: '2',
      url: 'https://cf.shopee.vn/file/8c3a386cba20d1ae9b359f9c9d631e2e',
      title: 'Thời trang Nam',
      description: 'Chất liệu vải phông cao cấp, phù hợp với mọi Nam',
      price: 249.999,
      stock: 50,
      quantity: 0,
    },
    {
      id: '3',
      url: 'https://salt.tikicdn.com/cache/550x550/ts/product/89/85/eb/1b49d449af1319640c145a8d932fa741.jpg',
      title: 'Thời trang Nam',
      description: 'Chất liệu vải phông cao cấp, phù hợp với mọi Nam',
      price: 249.999,
      stock: 120,
      quantity: 0,
    },
    {
      id: '4',
      url: 'https://vn-live-01.slatic.net/p/7c0ad59cb5b08a84b0049acf8409779c.jpg',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 70,
      quantity: 0,
    },
    {
      id: '5',
      url: 'https://sg-live-01.slatic.net/p/1a301e55d45c3a580299e76e877a5723.jpg',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 100,
      quantity: 0,
    },
    {
      id: '6',
      url: 'https://sg-live-01.slatic.net/p/7ba1f153e98e6dbba77d4ef57ea519c7.jpg',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 100,
      quantity: 0,
    },
    {
      id: '7',
      url: 'https://sg-live-01.slatic.net/p/ba43d2da3a730c73fcd29bc15ff51ac3.jpg',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 75,
      quantity: 0,
    },
    {
      id: '8',
      url: 'https://cf.shopee.vn/file/07f4dfa7157998588b51ca710dc5dfba_tn',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 95,
      quantity: 0,
    },
    {
      id: '9',
      url: 'https://salt.tikicdn.com/cache/280x280/ts/product/30/85/5d/f987794bdfa40575478c9f83b01c8287.jpg',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 160,
      quantity: 0,
    },
    {
      id: '10',
      url: 'https://salt.tikicdn.com/ts/product/1e/f9/de/aed4300af57dd51f2229e91b119e70c7.jpg',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 150,
      quantity: 0,
    },
    {
      id: '11',
      url: 'https://vn-live-01.slatic.net/p/1254c3bbaa42fdac3249c106e50c86ae.jpg',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 130,
      quantity: 0,
    },
    {
      id: '12',
      url: 'https://cf.shopee.vn/file/35f67666a834f4624bfb8f48b0bbadfc_tn',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 40,
      quantity: 0,
    },
    {
      id: '13',
      url: 'https://salt.tikicdn.com/cache/280x280/ts/product/30/85/5d/f987794bdfa40575478c9f83b01c8287.jpg',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 60,
      quantity: 0,
    },
    {
      id: '14',
      url: 'https://salt.tikicdn.com/ts/product/1e/f9/de/aed4300af57dd51f2229e91b119e70c7.jpg',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 20,
      quantity: 0,
    },
    {
      id: '15',
      url: 'https://vn-live-01.slatic.net/p/b24e4473b84e1322bcabc8f4b3399de6.jpg',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 100,
      quantity: 0,
    },
    {
      id: '16',
      url: 'https://cf.shopee.vn/file/290cc75b8887b5924c77312125a576b3',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 80,
      quantity: 0,
    },
    {
      id: '17',
      url: 'https://vn-live-01.slatic.net/p/2bb7673e65ebaf0e2f997c109097bb53.jpg',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 90,
      quantity: 0,
    },
    {
      id: '18',
      url: 'https://salt.tikicdn.com/cache/280x280/ts/product/55/be/87/daa5427b724c84e38eec00895650efc8.jpg',
      title: 'ÁO Unisex',
      description: 'Chất liệu vải phông cao cấp, chất vải mềm mịn',
      price: 199.999,
      stock: 110,
      quantity: 0,
    },
  ];
}























