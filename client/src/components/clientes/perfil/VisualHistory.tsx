import { useState } from 'react';
import { Camera, Plus } from 'lucide-react';
import NewVisualRecordModal from './NewVisualRecordModal';

const VisualHistory = ({ history }: { history: any[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-surface border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-text-primary">Historial Visual</h2>
          <p className="text-sm text-text-secondary">Galería de cortes anteriores</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="text-primary hover:bg-primary/10 border border-primary font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Nuevo registro
        </button>
      </div>

      {history && history.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {history.map((record) => (
            <div key={record.id} className="group relative rounded-lg overflow-hidden border border-border bg-background cursor-pointer">
              <div className="aspect-square overflow-hidden bg-surfaceHover relative">
                <img 
                  src={record.imageUrl} 
                  alt={record.service} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="text-xs text-text-secondary mb-1">{record.date}</p>
                  <p className="text-sm font-bold text-text-primary">{record.service}</p>
                  <p className="text-xs text-primary">{record.barber}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-border rounded-lg bg-background/50">
          <div className="w-12 h-12 rounded-full bg-surfaceHover flex items-center justify-center text-text-secondary mb-3">
            <Camera className="w-6 h-6" />
          </div>
          <p className="text-text-primary font-medium mb-1">Sin registros visuales</p>
          <p className="text-sm text-text-secondary">Añade la primera fotografía del estilo de este cliente.</p>
        </div>
      )}

      {isModalOpen && <NewVisualRecordModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default VisualHistory;
