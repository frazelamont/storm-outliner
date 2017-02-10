/**
 * @name storm-outiner: Hide CSS outline on mouse interactions, show on keyboard interactions
 * @version 0.1.0: Fri, 10 Feb 2017 16:49:24 GMT
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