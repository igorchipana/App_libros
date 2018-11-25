import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AddLibro from '../AddLibro';

test('AddLibro renders properly', () => {
  const wrapper = shallow(<AddLibro/>);
  const element = wrapper.find('form');
  expect(element.find('input').length).toBe(3);
  expect(element.find('input').get(0).props.name).toBe('nombre');
  expect(element.find('input').get(1).props.name).toBe('autor');
  expect(element.find('input').get(2).props.name).toBe('costo');
  expect(element.find('textarea').length).toBe(1);
  expect(element.find('textarea').get(0).props.name).toBe('descripcion');
   expect(element.find('select').length).toBe(1);
  expect(element.find('select').get(0).props.name).toBe('categoria');
   expect(element.find('button').length).toBe(1);
  expect(element.find('button').get(0).props.type).toBe('submit');
});

test('AddLibro renders a snapshot properly', () => {
  const tree = renderer.create(<AddLibro/>).toJSON();
  expect(tree).toMatchSnapshot();
});