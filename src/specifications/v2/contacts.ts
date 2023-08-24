export interface Specifications {
    url: string
    method: string
    title: string
    description: string
    parameters: Object
}

const specifications: Specifications[] = [
    {
        url: "/v1/contacts",
        method: "GET",
        title: "List all contacts",
        description: "This endpoint allows you to retrieve a paginated list of all your contacts. By default, a maximum of ten contacts are shown per page.",
        parameters: {
            required: [],
            optional: [
                {
                    key: "name",
                    type: "string",
                    description: "Filter by name of contact.",
                },
                {
                    key: "email",
                    type: "string",
                    description: "Filter by email of contact.",
                },
            ],
        },
    },
]

export default specifications