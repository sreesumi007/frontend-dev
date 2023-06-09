/* tslint:disable */
/* eslint-disable */
/**
 * MathGrass
 * This is the OpenAPI specification for MathGrass
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: andreas.domanowski@tu-dresden.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface VertexDTO
 */
export interface VertexDTO {
    /**
     * 
     * @type {number}
     * @memberof VertexDTO
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof VertexDTO
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof VertexDTO
     */
    y: number;
    /**
     * 
     * @type {string}
     * @memberof VertexDTO
     */
    label?: string;
}

/**
 * Check if a given object implements the VertexDTO interface.
 */
export function instanceOfVertexDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "x" in value;
    isInstance = isInstance && "y" in value;

    return isInstance;
}

export function VertexDTOFromJSON(json: any): VertexDTO {
    return VertexDTOFromJSONTyped(json, false);
}

export function VertexDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): VertexDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'x': json['x'],
        'y': json['y'],
        'label': !exists(json, 'label') ? undefined : json['label'],
    };
}

export function VertexDTOToJSON(value?: VertexDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'x': value.x,
        'y': value.y,
        'label': value.label,
    };
}

