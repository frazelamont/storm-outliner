/**
 * @name storm-outiner: Hide CSS outline on mouse interactions, show on keyboard interactions
 * @version 0.1.0: Fri, 10 Mar 2017 17:52:01 GMT
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