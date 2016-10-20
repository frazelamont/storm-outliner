import should from 'should';
import 'jsdom-global/register';
import Outliner from '../dist/storm-outliner';

describe('Outliner', () => {

  let mousedown = document.createEvent('HTMLEvents'),
      keydown  = document.createEvent('HTMLEvents');

  it('should attach a mousedown eventListener that edits a style tag in the head', () => {
    mousedown.initEvent('mousedown', false, true);
    document.dispatchEvent(mousedown);
    should(document.getElementsByTagName('STYLE')[0].innerHTML).equal('*:focus{outline:none !important}');
  });

  it('should attach a keydown eventListener', () => {
    keydown.initEvent('keydown', false, true);
    document.dispatchEvent(keydown);
    should(document.getElementsByTagName('STYLE')[0].innerHTML).equal('');
    
  });

});