/**
 * @name storm-outliner: Hide CSS outline on mouse interactions, show on keyboard interactions
 * @version 1.0.6: Fri, 29 Jun 2018 12:55:37 GMT
 * @author stormid
 * @license MIT
 */
{
    let styleElement = document.createElement('STYLE'),
        setCss = cssText => {
            styleElement.innerHTML = cssText;
        };

    document.getElementsByTagName('HEAD')[0].appendChild(styleElement);

    document.addEventListener('mousedown', () => {
        setCss('*:focus{outline:none !important}');
    });

    document.addEventListener('keydown', () => {
        setCss('');
    });
};