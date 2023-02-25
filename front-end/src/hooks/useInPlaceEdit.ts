import React from "react";

export function useInPlaceEdit<T>(initialData: T, defaultEditing = false) {
    const [editing, setEditing] = React.useState(defaultEditing);
    const [data, setData] = React.useState(initialData);

    const update = (newData: T) => setData(newData);
    const edit = React.useCallback(() => {
        setData(initialData);
        setEditing(true);
    }, [initialData]);
    const close = () => setEditing(false);

    return [editing, data, update, edit, close] as const;
}
