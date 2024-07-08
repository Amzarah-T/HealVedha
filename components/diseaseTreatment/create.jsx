"use client";

import React, { useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';

function DiseaseTreatmentCreate({ saveData, editData, deleteData, editMode, deleteMode, dataObject }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <div>
                {editMode ? <Button onPress={onOpen} color="primary" className="max-w-fit">Edit</Button>
                    : deleteMode ? <Button onPress={onOpen} color="danger" className="max-w-fit">Delete</Button>
                    : <Button onPress={onOpen} color="success" className="max-w-fit">Create</Button>
                }
            </div>

            <Modal
                isOpen={isOpen}
                placement={'center'}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create Data</ModalHeader>
                            <ModalBody>
                                {console.log("Printing dataObject", dataObject)}
                                <form action={(formData) => {
                                    if (editMode) {
                                        editData(formData, dataObject);
                                        onClose();
                                    } else if (deleteMode) {
                                        deleteData(formData, dataObject);
                                        onClose();
                                    } else {
                                        saveData(formData);
                                        onClose();
                                    }
                                }} className='flex gap-5 flex-col'>
                                    <Input label='English' name='descEn' required={true} defaultValue={dataObject?.descEn}/>
                                    <Input label='Sinhala' name='descTm' required={true} defaultValue={dataObject?.descTm}/>
                                    <Input label='Tamil' name='descSn' required={true} defaultValue={dataObject?.descSn}/>
                                    <Button type="submit" color={deleteMode ? "danger" : "primary"}>
                                        {deleteMode ? "Confirm Delete" : "Save"}
                                    </Button>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default DiseaseTreatmentCreate;