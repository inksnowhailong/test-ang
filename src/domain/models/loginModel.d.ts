export  interface loginResult {
    /**
     * token
     */
    token: string;
    /**
     * 登录信息
     */
    Info: Record<string, any>;
    /**
     * 登录时间
     */
    time: number;
}
