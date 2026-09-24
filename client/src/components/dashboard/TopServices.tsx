import { mockData } from '../../data/mockData';

const TopServices = () => {
  const maxCount = Math.max(...mockData.topServices.map(s => s.count));

  return (
    <div className="bg-surface border border-border rounded-xl p-5">
      <h3 className="text-lg font-bold text-text-primary mb-6">Servicios más solicitados</h3>
      
      <div className="space-y-4">
        {mockData.topServices.map((service) => (
          <div key={service.id}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-text-primary">{service.name}</span>
              <span className="text-text-secondary font-semibold">{service.count}</span>
            </div>
            <div className="w-full bg-background rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ width: `${(service.count / maxCount) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopServices;
