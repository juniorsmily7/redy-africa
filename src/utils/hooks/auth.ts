import { useNavigate } from "react-router-dom";

import { apiService } from "@/services/api.service";
import { LOGIN_URL } from "@/data/urls.data";

export const useAuth = () => {
    const navigate = useNavigate();

    async function logoutAction() {
        await apiService.logout();
        navigate(LOGIN_URL);
    }

    return {
        logoutAction,
    };
};
