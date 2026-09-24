const ServiceHistory = ({ history }: { history: any[] }) => {
  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden mt-8">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold text-text-primary">Historial de Servicios</h2>
        <p className="text-sm text-text-secondary">Visitas anteriores y gastos</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-surfaceHover/30">
            <tr className="border-b border-border text-text-secondary">
              <th className="py-4 px-6 font-semibold">Fecha</th>
              <th className="py-4 px-6 font-semibold">Servicio</th>
              <th className="py-4 px-6 font-semibold">Barbero</th>
              <th className="py-4 px-6 font-semibold text-right">Precio</th>
              <th className="py-4 px-6 font-semibold text-right">Método de pago</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {history.length > 0 ? (
              history.map((record) => (
                <tr key={record.id} className="hover:bg-surfaceHover/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-text-primary">{record.date}</td>
                  <td className="py-4 px-6 text-text-secondary">{record.service}</td>
                  <td className="py-4 px-6 text-text-secondary">{record.barber}</td>
                  <td className="py-4 px-6 text-right font-semibold text-text-primary">S/ {record.price.toFixed(2)}</td>
                  <td className="py-4 px-6 text-right">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-background border border-border text-text-secondary">
                      {record.payment}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-8 text-center text-text-secondary">
                  No hay historial de servicios aún.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceHistory;
