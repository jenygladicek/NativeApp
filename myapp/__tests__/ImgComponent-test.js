import React, {Component} from 'react';
import  'react-native';
import ImgCombo from './../src/components/ImgComponent';

import renderer from 'react-test-renderer';

describe('Welcome (Snapshot)', () => {
    it('Welcome renders Image', () => {
      let component = renderer.create(<ImgCombo />);
      let json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });