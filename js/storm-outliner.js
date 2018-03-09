/**
 * @name storm-outliner: Hide CSS outline on mouse interactions, show on keyboard interactions
 * @version 1.0.5: Fri, 09 Mar 2018 19:37:58 GMT
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