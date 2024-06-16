import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { model } from "@/models";

async function getData() {
    try {
        const result = await model.Post.findAll({ incude: model.User });

        return result;
    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}

export default async function PostsTable() {
    const data = await getData();

    return (
        <Table aria-label="Posts">
            <TableHeader>
                <TableColumn>Id</TableColumn>
                <TableColumn>Title</TableColumn>
                <TableColumn>Posted By</TableColumn>
            </TableHeader>
            <TableBody>
                {data.map((result, index) => {
                    return (
                        <TableRow key={index}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.title}</TableCell>
                            <TableCell>{data.user.username}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    );
}
