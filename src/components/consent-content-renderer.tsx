'use client';

import type { ConsentFormContent } from "@/data/consent-forms";
import React from "react";
import { Textarea } from "./ui/textarea";

interface ConsentContentRendererProps {
    data: ConsentFormContent;
    doctorName: string;
    customRisks: string;
    onCustomRisksChange: (value: string) => void;
    isFinalized: boolean;
}

const replacePlaceholders = (text: string, doctorName: string) => {
    return text.replace(/\[\*\]/g, doctorName || '_______');
}

export function ConsentContentRenderer({ data, doctorName, customRisks, onCustomRisksChange, isFinalized }: ConsentContentRendererProps) {
    return (
        <div className="space-y-6">
            {data.authorizedAct && (
                <div className="text-center">
                    <h3 className="font-bold text-base mb-2">Acto Autorizado</h3>
                    <p>{replacePlaceholders(data.authorizedAct, doctorName)}</p>
                </div>
            )}
            {data.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-3">
                    <h3 className="font-bold text-base">{section.title}</h3>
                    {section.content.map((item, itemIndex) => {
                        if (typeof item === 'string') {
                            return <p key={itemIndex}>{replacePlaceholders(item, doctorName)}</p>;
                        }
                        if (item.type === 'list') {
                            return (
                                <ul key={itemIndex} className="list-disc list-outside space-y-2 pl-5">
                                    {item.items.map((listItem, listIndex) => {
                                        if (typeof listItem === 'string') {
                                            return <li key={listIndex}>{replacePlaceholders(listItem, doctorName)}</li>;
                                        }
                                        return (
                                            <li key={listIndex}>
                                                <strong>{replacePlaceholders(listItem.title, doctorName)}</strong> {replacePlaceholders(listItem.text, doctorName)}
                                                {listItem.sublist && (
                                                    <ul className="list-disc list-outside space-y-1 pl-6 mt-2">
                                                        {listItem.sublist.map((subItem, subIndex) => (
                                                            <li key={subIndex}>{replacePlaceholders(subItem, doctorName)}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        )
                                    })}
                                </ul>
                            );
                        }
                        if (item.type === 'textarea') {
                            return (
                                <div key={itemIndex}>
                                    <Textarea
                                        placeholder={item.placeholder}
                                        className="print:hidden mt-2"
                                        value={customRisks}
                                        onChange={(e) => onCustomRisksChange(e.target.value)}
                                        disabled={isFinalized}
                                        rows={4}
                                    />
                                    <div className="hidden print:block text-sm p-2 border border-input rounded-md min-h-[80px] mt-2">
                                        {customRisks || <span className="text-muted-foreground">{item.placeholder}</span>}
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
            ))}
        </div>
    );
}
