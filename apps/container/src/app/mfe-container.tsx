import { HTMLAttributes, useEffect, useRef } from 'react';

declare global {
  /* eslint-disable-next-line @typescript-eslint/no-namespace */
  namespace JSX {
    interface IntrinsicElements {
      'contacts-element': unknown;
    }
  }
}

export default function MfeContainer() {
  const contactsElement = useRef();

  useEffect(() => {
    const loadMfeElementScript = (scriptName: string): HTMLScriptElement => {
      const currentUrl = window.location.origin;
      const newUrl = currentUrl.replace('4200', '4201');

      const runtimeScript = document.createElement('script');
      runtimeScript.src = `${newUrl}/${scriptName}`;
      document.body.appendChild(runtimeScript);
      return runtimeScript;
    };

    const removeElementScript = (
      scriptElement: HTMLScriptElement
    ): HTMLScriptElement => document.body.removeChild(scriptElement);

    const scriptElements = [
      // loadMfeElementScript('styles.css'),
      loadMfeElementScript('runtime.js'),
      loadMfeElementScript('polyfills.js'),
      loadMfeElementScript('styles.js'),
      loadMfeElementScript('vendor.js'),
      loadMfeElementScript('main.js'),
      // loadMfeElementScript('runtime.0410f22130730f4c.esm.js'),
      // loadMfeElementScript('main.fbdb7d6bf711c7cb.esm.js'),
    ];

    return () => {
      for (const scriptElement of scriptElements) {
        removeElementScript(scriptElement);
      }
    };
  });

  return <contacts-element ref={contactsElement}></contacts-element>;
}
