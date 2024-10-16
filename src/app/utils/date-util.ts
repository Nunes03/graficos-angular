export class DateUtil {

    private constructor() {}

    public static formatDate(date: Date): string {
        const day = String(date.getDate()).padStart(2, '0'); // Obtém o dia e garante dois dígitos
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Obtém o mês (adiciona +1, pois começa em 0)
        const year = date.getFullYear(); // Obtém o ano

        return `${day}/${month}/${year}`;
    }
}
