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
 * @interface LabelDTO
 */
export interface LabelDTO {
    /**
     * 
     * @type {number}
     * @memberof LabelDTO
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof LabelDTO
     */
    label: string;
}

/**
 * Check if a given object implements the LabelDTO interface.
 */
export function instanceOfLabelDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "label" in value;

    return isInstance;
}

export function LabelDTOFromJSON(json: any): LabelDTO {
    return LabelDTOFromJSONTyped(json, false);
}

export function LabelDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): LabelDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'label': json['label'],
    };
}

export function LabelDTOToJSON(value?: LabelDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'label': value.label,
    };
}

