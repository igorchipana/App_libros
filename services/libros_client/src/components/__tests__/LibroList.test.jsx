import React from 'react';
import { shallow } from 'enzyme';
 
import LibroList from '../LibroList';
 
const libros = [
  {
	'active': true,
	'id':1,
	'nombre': 'los amantes son dementes',
	'costo': '20',
	'autor': 'mauricio',
	'descripcion': 'buen libro',
	'categoria': 'drama'
  }
];


test('LibroList renders properly', () => {
  const wrapper = shallow(<LibroList libros={libros}/>);
  const element = wrapper.find('td');
  expect(element.length).toBe(5);
  expect(element.get(0).props.children).toBe('los amantes son dementes');
  expect(element.get(1).props.children).toBe('buen libro');
  expect(element.get(2).props.children).toBe('drama');
  expect(element.get(3).props.children).toBe('mauricio');
  expect(element.get(4).props.children).toBe('20');
});
