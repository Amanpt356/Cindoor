"use client";

import { Star, ThumbsUp } from "lucide-react";

export default function ReviewsSection() {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Ratings & Reviews</h3>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Summary */}
                <div className="w-full md:w-1/3 space-y-4">
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-gray-900">4.8</span>
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm">Based on 12,453 global ratings</p>

                    <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center gap-2 text-sm">
                                <span className="w-12 text-gray-600">{rating} star</span>
                                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-yellow-400 rounded-full"
                                        style={{ width: rating === 5 ? '75%' : rating === 4 ? '15%' : '4%' }}
                                    ></div>
                                </div>
                                <span className="w-8 text-right text-gray-500">{rating === 5 ? '75%' : rating === 4 ? '15%' : '4%'}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reviews List */}
                <div className="flex-1 space-y-6">
                    {[1, 2].map((i) => (
                        <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                                    {i === 1 ? 'RK' : 'AJ'}
                                </div>
                                <span className="font-medium text-gray-900">{i === 1 ? 'Rahul Kumar' : 'Anjali J.'}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                                </div>
                                <span className="font-bold text-gray-900 text-sm">Perfect for travel!</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">
                                The noise cancellation is absolutely top-tier. I used these on a flight from Mumbai to London and I couldn't hear a thing. Battery life is also as advertised. Highly recommended!
                            </p>
                            <p className="text-xs text-gray-400 mb-2">Reviewed in India on 12 January 2026</p>
                            <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900">
                                <ThumbsUp size={14} /> Helpful
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
