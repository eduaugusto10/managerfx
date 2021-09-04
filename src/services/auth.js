export function signIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: "1234567890",
                user: { 
                    name: "Eduardo", 
                    email: "eduagusto10@gmail.com", 
                },
            });
        }, 2000);
    });
}
