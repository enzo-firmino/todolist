const DATA_URL = "https://iut-info.univ-reims.fr/todo-list/todos";

function credential(options = {}) {
    return {
        ...options,
        credentials: 'include',
    }
}

function method(method, options = {}) {
    return {
        ...options,
        method,
    }
}

function body(data, options = {}) {
    return {
        ...options,
        body: JSON.stringify(data)
    }
}

function mimeType(mimeType, options = {}) {
    const headers = options.headers ?? new Headers();
    headers.append("Content-Type", mimeType);
    return {
        ...options,
        headers
    }
}

function apiFetch(url, options={}) {
    return fetch(url, credential(options))
        .then(response => {
            if (response.status === 401) {
                window.location = "https://iut-info.univ-reims.fr/todo-list/login?redirect="+encodeURIComponent(window.location.href);
                return Promise.reject();
            }
            return response;
        })
}

function getAll() {
    return apiFetch(DATA_URL)
        .then(response => response.json());
}

function append(text, done=false) {
    const options = method('POST', body({ text, done}, mimeType('application/json')));
    return apiFetch(DATA_URL, options)
        .then(response => response.json());
}

function update(todo) {
    const options = method('PATCH', body(todo, mimeType('application/merge-patch+json')));
    return apiFetch(DATA_URL+"/"+todo.id, options)
        .then(response => response.json());
}

function remove(todo) {
    return apiFetch(DATA_URL+"/"+todo.id, method('DELETE'))
}

function getOne(id) {
    return apiFetch(DATA_URL+"/"+id)
        .then(response => response.json());
}

export {
    getAll,
    append,
    update,
    remove,
    getOne,
};
const fetchTodos = {
    getAll,
    append,
    update,
    remove,
    getOne,
}
export default fetchTodos;
