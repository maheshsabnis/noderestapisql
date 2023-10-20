import sql from 'mssql';
class DbConection {
    static async connect(){
        const connection = await sql.connect('Server=127.0.0.1;Database=eShoppingCodi;User Id=sa;Password=MyPass@word;Encrypt=false;TrustServerCertificate=true');
        this.isConnectionSuccess = connection.connected;
        console.log(`Conected ${connection.connected}`);
        return connection.connected;
    }
}

export {DbConection};