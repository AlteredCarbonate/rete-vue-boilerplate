import Rete from 'rete';

/**
 * editor Identifier, shown in JS Export
 * @type {string}
 */
export const editorID = 'demo@0.1.0';

/**
 * Editor Instance of RETE
 * @param container
 * @returns {NodeEditor}
 */
export function editor(container) {
   return new Rete.NodeEditor(editorID, container);
}

/**
 * Engine Instance of RETE
 * @returns {Engine}
 */
export function engine() {
   return new Rete.Engine(editorID);
}
