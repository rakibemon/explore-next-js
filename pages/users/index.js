import React from 'react';
import Link from 'next/link'
const index = ({ users }) => {
    return (
        <div>
            <h3>This is Users page : {users.length}</h3>
            {
                users.map(user => {
                    return (
                        <h2 key={user?.id}>{user?.name} <Link href={`users/${user?.id}`}>
                        <a>Explore</a>
                    </Link></h2>
                    );
                })
            }
        </div>
    );
};

export default index;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    return {
        props: { users: users }
    }
}