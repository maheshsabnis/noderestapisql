import sql from 'mssql';
// Data Connection
class DbConection {
    static async connect(){
        const connection = await sql.connect('Server=127.0.0.1;Database=eShoppingCodi;User Id=sa;Password=MyPass@word;Encrypt=false;TrustServerCertificate=true');

        // const connection = await sql.connect("Server=tcp:test001server.database.windows.net,1433;Initial Catalog=eShoppingCodi;Persist Security Info=False;User ID=MaheshAdmin;Password=P@ssw0rd_;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        this.isConnectionSuccess = connection.connected;
        console.log(`Conected ${connection.connected}`);
        return connection.connected;
    }
}

export {DbConection};