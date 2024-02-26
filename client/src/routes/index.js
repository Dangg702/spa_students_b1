import { HeaderOnly } from "~/layouts";

import StudentPage from "~/pages/StudentPage/StudentPage";
import CreateStudent from "~/pages/CreateStudent/CreateStudent";
import Home from "~/pages/Home";
import UpdateStudent from "~/pages/UpdateStudent/UpdateStudent";

export const routes = [
    {
        path: '/student',
        component: Home,
        layout: HeaderOnly,
    },
    {
        path: '/student/search',
        component: StudentPage,
        layout: HeaderOnly,
    },
    {
        path: '/student/update/:id',
        component: UpdateStudent,
    },
    {
        path: '/student/create',
        component: CreateStudent,
        layout: HeaderOnly,
    },
    {
        path: '/',
        component: Home,
        layout: HeaderOnly,
    },

]