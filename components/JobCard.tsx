import React from 'react';
import { MapPin, Clock, Building2 } from 'lucide-react';
import { JobPosting } from '../types';
import { Button } from './Button';

interface JobCardProps {
  job: JobPosting;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <Building2 className="w-4 h-4 mr-1" />
            <span className="font-medium">{job.company}</span>
          </div>
        </div>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {job.type}
        </span>
      </div>
      
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {job.location}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {job.postedDate}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {job.tags.map((tag, idx) => (
          <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
            {tag}
          </span>
        ))}
      </div>

      <Button variant="outline" className="w-full">Jetzt bewerben</Button>
    </div>
  );
};